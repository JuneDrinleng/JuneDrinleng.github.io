import os
import ollama
import httpx
import sys
from tqdm import tqdm

# --- 配置区 ---
MODEL_NAME = "qwen3:8b" 
SOURCE_DIR = "src/posts"
TARGET_DIR = "src/posts-en"

client = ollama.Client(host='http://localhost:11434', timeout=httpx.Timeout(600.0))

SYSTEM_PROMPT = """You are a professional academic translator. 
Translate the Markdown text to English. Keep all formats and LaTeX formulas. 
Use terminology: Single-Particle Tracking, LSPR, Maxwell/Kelvin, etc.
Output ONLY the translation.Do not translator the code blocks, math formulas, and ,all the figure and the references"""

def translate_chunk_stream(chunk):
    """流式翻译并实时显示进度"""
    try:
        full_response = ""
        # 开启流式传输
        stream = client.chat(
            model=MODEL_NAME,
            messages=[
                {'role': 'system', 'content': SYSTEM_PROMPT},
                {'role': 'user', 'content': chunk},
            ],
            options={'temperature': 0.1, 'num_ctx': 8192},
            stream=True,
        )
        
        print("\n--- [Streaming Segment Start] ---")
        for part in stream:
            content = part['message']['content']
            full_response += content
            # 实时打印到终端，不换行，flush保证立即刷新
            print(content, end='', flush=True)
        print("\n--- [Segment End] ---\n")
        
        return full_response
    except Exception as e:
        print(f"\n⚠️  Error: {e}")
        return chunk

def split_markdown(text, chunk_size=2000):
    chunks = []
    lines = text.split('\n')
    current_chunk = []
    current_length = 0
    for line in lines:
        current_chunk.append(line)
        current_length += len(line)
        if current_length > chunk_size and line.startswith('##'):
            chunks.append('\n'.join(current_chunk))
            current_chunk = []
            current_length = 0
    if current_chunk:
        chunks.append('\n'.join(current_chunk))
    return chunks

if __name__ == "__main__":
    if not os.path.exists(TARGET_DIR): os.makedirs(TARGET_DIR)
    
    all_files = [f for f in os.listdir(SOURCE_DIR) if f.endswith(".md")]
    files_to_process = [f for f in all_files if not os.path.exists(os.path.join(TARGET_DIR, f))]

    if not files_to_process:
        print("🎉 No new files to translate.")
    else:
        print(f"found {len(files_to_process)} new files. Starting...")
        
        for filename in files_to_process:
            print(f"📖 Processing File: {filename}")
            input_path = os.path.join(SOURCE_DIR, filename)
            with open(input_path, 'r', encoding='utf-8') as f:
                full_text = f.read()

            chunks = split_markdown(full_text)
            translated_chunks = []
            
            for i, chunk in enumerate(chunks):
                print(f"📍 Chunk {i+1}/{len(chunks)}:")
                translated_chunks.append(translate_chunk_stream(chunk))
            
            # 合并并保存
            final_content = '\n'.join(translated_chunks)
            with open(os.path.join(TARGET_DIR, filename), 'w', encoding='utf-8') as f:
                f.write(final_content)
            print(f"✅ Successfully saved: {filename}\n" + "="*40)
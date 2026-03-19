import { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router';
import {
  LayoutDashboard, FileText, Plus, ExternalLink,
  LogOut, ChevronUp, PenLine,
} from 'lucide-react';
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup,
  SidebarGroupContent, SidebarGroupLabel, SidebarHeader,
  SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarProvider, SidebarTrigger,
} from '@/app/components/ui/sidebar';
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from '@/app/components/ui/breadcrumb';
import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { Separator } from '@/app/components/ui/separator';
import { githubGetUser, type GitHubUser } from './lib/github';
import { getToken, clearToken } from './lib/auth';

const NAV_MAIN = [
  { label: '概览',    to: '/dashboard',           icon: LayoutDashboard },
  { label: '所有文章', to: '/dashboard/posts',     icon: FileText        },
  { label: '新建文章', to: '/dashboard/posts/new', icon: Plus            },
];
const NAV_EXT = [
  { label: '查看博客', href: '/' },
];

function useCrumbs() {
  const { pathname } = useLocation();
  if (pathname === '/dashboard')            return [];
  if (pathname === '/dashboard/posts')      return [{ label: '文章' }];
  if (pathname === '/dashboard/posts/new')  return [{ label: '文章', to: '/dashboard/posts' }, { label: '新建' }];
  if (/\/dashboard\/posts\/.+\/edit/.test(pathname))
    return [{ label: '文章', to: '/dashboard/posts' }, { label: '编辑' }];
  return [];
}

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const crumbs = useCrumbs();
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) { navigate('/dashboard/login'); return; }
    githubGetUser(token)
      .then(u => {
        if (u.login !== 'JuneDrinleng') {
          clearToken();
          navigate('/dashboard/login');
          return;
        }
        setUser(u);
        setChecking(false);
      })
      .catch(() => { clearToken(); navigate('/dashboard/login'); });
  }, []);

  function logout() {
    clearToken();
    navigate('/dashboard/login');
  }

  function isActive(to: string) {
    if (to === '/dashboard') return location.pathname === '/dashboard';
    return location.pathname.startsWith(to);
  }

  const initials = (user?.name ?? user?.login ?? '?')[0].toUpperCase();

  return (
    <SidebarProvider>
      <Sidebar variant="inset">
        {/* ── Logo ── */}
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link to="/dashboard">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <PenLine className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">LUNE Admin</span>
                    <span className="truncate text-xs text-muted-foreground">内容管理</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* ── Nav ── */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>管理</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV_MAIN.map(item => (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton asChild isActive={isActive(item.to)}>
                      <Link to={item.to}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>外部链接</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV_EXT.map(item => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild>
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* ── User ── */}
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user?.avatar_url} alt={user?.login} />
                      <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user?.name ?? user?.login}</span>
                      <span className="truncate text-xs text-muted-foreground">@{user?.login}</span>
                    </div>
                    <ChevronUp className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-48 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuItem
                    onClick={logout}
                    className="text-destructive focus:text-destructive"
                  >
                    <LogOut className="size-4 mr-2" />
                    退出登录
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      {/* ── Main ── */}
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-1 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/dashboard" className="text-sm">首页</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {crumbs.map((c, i) => (
                <React.Fragment key={i}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {c.to && i < crumbs.length - 1 ? (
                      <BreadcrumbLink asChild>
                        <Link to={c.to} className="text-sm">{c.label}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="text-sm">{c.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="flex-1 overflow-auto">
          {checking ? null : <Outlet />}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

// Make React available for JSX Fragment
import React from 'react';

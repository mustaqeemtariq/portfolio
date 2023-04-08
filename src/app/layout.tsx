import React from 'react'
import { AppHeader } from './header'
import { Sidebar } from './sidebar'

interface AppLayoutProps {
    title?: string
    renderHeader?: boolean
    renderSidebar?: boolean
    docTitle?: string,
    children: React.ReactNode
}

export const AppLayout = ({children, title, renderHeader = true, renderSidebar}: AppLayoutProps) => {
  const docTitleText = title ? `${title} | Portfolio` : 'Portfolio'
  return (
    <>
      {renderHeader ? <AppHeader /> : null}
      {renderSidebar ? <Sidebar>{children}</Sidebar> : <>{children}</>}
    </>
  )
}

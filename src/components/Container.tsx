'use client'

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({children}:
    ContainerProps) => {
  return (
    <div className="mx-auto  px-4 sm:px-2 md:px-10 xl:px-20 pt-3">
      {children}
    </div>
  )
}

export default Container
interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20 px-4">
      {children}
    </div>
  );
};

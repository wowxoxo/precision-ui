import React, { FC, ReactNode, createContext, useContext } from "react";

interface LinkWrapperProps {
  href: string;
  children: ReactNode;
}

type LinkWrapperComponent = FC<LinkWrapperProps>;

const LinkWrapperContext = createContext<LinkWrapperComponent | null>(null);

interface LinkWrapperProviderProps {
  children: ReactNode;
  LinkWrapper: LinkWrapperComponent;
}

export const LinkWrapperProvider: FC<LinkWrapperProviderProps> = ({ children, LinkWrapper }) => {
  return (
    <LinkWrapperContext.Provider value={LinkWrapper}>
      {children}
    </LinkWrapperContext.Provider>
  );
};

export const useLinkWrapper = (): LinkWrapperComponent => {
  const context = useContext(LinkWrapperContext);
  if (!context) {
    throw new Error("useLinkWrapper must be used within a LinkWrapperProvider");
  }
  return context;
};
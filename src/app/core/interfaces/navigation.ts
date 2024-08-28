export interface Header {
  title: string;
  link?: {
    title: string;
    path: string;
    accent?: boolean;
    openExternalBrowser?: boolean;
  };
}

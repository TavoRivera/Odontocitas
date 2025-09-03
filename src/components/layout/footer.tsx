import { ToothIcon } from '../icons/tooth-icon';

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container flex items-center justify-between py-6 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <ToothIcon className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} OdontoLink. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

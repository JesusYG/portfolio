import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="container relative flex flex-col items-center justify-center pt-10 pb-6 overflow-hidden text-white">
        <div className="flex gap-6 mb-8" style={{ maxWidth: 600 }}>
          <a
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/adisreyaj"
            className="hover:text-primary"
          >
            <svg
              width="36"
              height="36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3C9.713 3 3 9.713 3 18a14.99 14.99 0 0010.257 14.232c.75.13 1.03-.32 1.03-.714 0-.355-.019-1.536-.019-2.793-3.768.694-4.743-.918-5.043-1.763-.17-.431-.9-1.762-1.537-2.119-.526-.28-1.276-.975-.02-.993 1.182-.02 2.025 1.087 2.307 1.537 1.35 2.268 3.507 1.631 4.368 1.238.132-.975.525-1.63.957-2.006-3.338-.375-6.825-1.669-6.825-7.407 0-1.631.58-2.98 1.537-4.031-.15-.375-.675-1.913.15-3.975 0 0 1.256-.393 4.125 1.539a13.92 13.92 0 013.75-.507c1.276 0 2.55.168 3.75.505 2.869-1.95 4.126-1.536 4.126-1.536.825 2.063.3 3.6.15 3.975.955 1.05 1.537 2.38 1.537 4.03 0 5.758-3.506 7.032-6.843 7.407.543.468 1.012 1.369 1.012 2.776 0 2.005-.019 3.617-.019 4.125 0 .393.282.86 1.032.71A15.024 15.024 0 0033 18c0-8.287-6.712-15-15-15z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            href="https://twitter.com/JG9409388951852"
            className="hover:text-primary"
          >
            <svg
              width="36"
              height="36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.243 8.484c-1.145.506-2.36.84-3.603.987A6.294 6.294 0 0032.4 6a12.537 12.537 0 01-3.984 1.522 6.273 6.273 0 00-10.689 5.721 17.81 17.81 0 01-12.93-6.555 6.252 6.252 0 00-.849 3.155 6.272 6.272 0 002.79 5.221 6.252 6.252 0 01-2.841-.784v.078a6.278 6.278 0 005.032 6.151 6.316 6.316 0 01-2.835.108 6.278 6.278 0 005.861 4.358 12.59 12.59 0 01-9.287 2.598 17.745 17.745 0 009.616 2.82c11.539 0 17.85-9.56 17.85-17.85 0-.27-.008-.543-.02-.81a12.745 12.745 0 003.13-3.248l-.001-.001z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/jes%C3%BAs-garc%C3%ADa-a07729222/"
            className="hover:text-primary"
          >
            <svg
              width="36"
              height="36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.503 27.509h-3.998v-6.266c0-1.494-.03-3.417-2.085-3.417-2.084 0-2.402 1.626-2.402 3.308v6.375H15.02V14.625h3.84v1.755h.052c.537-1.011 1.842-2.08 3.792-2.08 4.05 0 4.8 2.666 4.8 6.136v7.073h-.002zM10.505 12.863a2.318 2.318 0 01-2.323-2.324 2.322 2.322 0 112.321 2.324h.002zm2.003 14.646H8.5V14.625h4.011v12.884h-.002zM29.505 4.5H6.494C5.39 4.5 4.5 5.37 4.5 6.446v23.109c0 1.075.891 1.945 1.992 1.945h23.007c1.101 0 2.001-.87 2.001-1.945V6.445c0-1.075-.9-1.945-2.001-1.945h.006z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="http://www.yohaal.com"
            className="hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blog"
          >
            <svg
              width="36"
              height="36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 33C9.716 33 3 26.285 3 18 3 9.716 9.716 3 18 3c8.285 0 15 6.716 15 15 0 8.285-6.715 15-15 15zm9.532-9.072v-.158c0-1.383 0-2.014-.977-2.573-.315-.179-.638-.341-.968-.488-.55-.25-.915-.414-1.407-1.134a18.77 18.77 0 01-.174-.258c-.518-.788-.891-1.355-2.313-1.13-2.798.444-3.005.936-3.128 1.767l-.019.137c-.181 1.215-.215 1.623.293 2.155 1.897 1.991 3.034 3.427 3.379 4.267.168.409.6 1.65.303 2.877a12.278 12.278 0 004.726-3.356c.166-.561.285-1.26.285-2.106zM18 5.75a12.218 12.218 0 00-8.844 3.774c.265.184.496.444.655.8.306.686.306 1.393.306 2.018 0 .492 0 .96.158 1.297.216.463 1.149.66 1.973.832.295.063.598.126.874.202.759.21 1.347.893 1.816 1.44.195.227.485.561.63.645.075-.054.317-.316.435-.747.093-.33.067-.621-.067-.78-.84-.99-.793-2.895-.534-3.598.408-1.109 1.683-1.026 2.616-.966.348.022.675.044.921.013.933-.117 1.221-1.537 1.424-1.815.438-.6 1.779-1.505 2.61-2.063A12.207 12.207 0 0018 5.75z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hashnode"
            href="#"
            className="hover:text-primary"
          >
            <svg
              width="30"
              height="30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.061 10.023a7.038 7.038 0 000 9.953l7.962 7.962a7.037 7.037 0 009.953 0l7.963-7.962a7.038 7.038 0 000-9.953l-7.963-7.962a7.038 7.038 0 00-9.953 0l-7.962 7.962zm16.422 8.46a4.926 4.926 0 10-6.966-6.967 4.926 4.926 0 006.966 6.967z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="currentColor" d="M0 0h30v30H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="hover:text-primary"
            aria-label="Dev.to"
          >
            <svg
              width="37"
              height="30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.22 0h32.56C36.006 0 37 1.007 37 2.25v25.5c0 1.243-.994 2.25-2.22 2.25H2.22C.994 30 0 28.993 0 27.75V2.25C0 1.007.994 0 2.22 0zm10.973 20.057c.627-.635.94-1.443.94-2.426v-5.053c0-.984-.313-1.79-.939-2.418-.62-.635-1.416-.952-2.386-.952H7.484V21h3.259c1.013 0 1.83-.314 2.45-.943zm-1.138-7.48v5.053c0 .422-.138.74-.415.953-.277.208-.554.311-.832.311H9.562v-7.58h1.247c.277 0 .554.106.83.32.278.208.416.522.416.944zM16.494 21h4.362v-2.105h-3.74v-2.738h2.285v-2.106h-2.285v-2.737h3.74V9.208h-4.362c-.416 0-.762.14-1.04.421-.277.28-.415.632-.415 1.053v8.844c0 .421.138.772.416 1.053a1.4 1.4 0 001.039.421zm7.97-1.474c.416.983.97 1.474 1.662 1.474s1.247-.491 1.661-1.474l2.701-10.318h-2.284l-2.078 8.103-2.078-8.103h-2.285l2.7 10.318z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <p className="text-sm">Copyright © 2024 - JesúsYG</p>
      </footer>
      <div className="w-full h-2 bg-primary-gradient"></div>
    </>
  );
};

export default Footer;

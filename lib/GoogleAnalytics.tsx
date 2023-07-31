"use client";
import Script from "next/script";

function GoogleAnalytics({ gtm_id }: { gtm_id: string }) {
  let id = gtm_id;
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${id}', { 
        page_path: window.location.pathname, 
        });
        `,
        }}
      />
    </>
  );
}

export default GoogleAnalytics;

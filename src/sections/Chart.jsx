import React from 'react';

const Chart = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-6xl">
        <iframe
          src="https://pump.fun/HGzKwNFuuGzjWA9VW3DuK9x4jaYyQ6sFz4D2FwRPpump?embed=1&theme=dark&trades=0&info=0"
          width="100%"
          height="500px"
          loading="lazy"
          title="Dexscreener Chart"
          className="w-full"
        >
        </iframe>
        <noscript>
          <p className="text-center text-red-500">
            Your browser does not support iframes. Please visit Dexscreener to view the live chart.
          </p>
        </noscript>
      </div>
    </section>
  );
};

export default Chart;

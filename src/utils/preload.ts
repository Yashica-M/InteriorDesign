export async function preloadImages(urls: string[]) {
  const promises = urls.map(
    (src) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        if (img.complete) return resolve();
        img.onload = () => resolve();
        img.onerror = () => resolve();
      }),
  );
  await Promise.all(promises);
}

export function buildScreenshotPublicId(repoName: string): string {
  return `portfolio/${repoName.toLowerCase()}`;
}

export function buildCloudinaryDeliveryUrl(
  cloudName: string,
  publicId: string,
  version?: number
): string {
  const versionSegment = version ? `v${version}/` : "";
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${versionSegment}${publicId}.png`;
}

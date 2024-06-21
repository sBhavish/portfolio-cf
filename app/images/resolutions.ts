export const resolutions = [
    '640x360',
    '1024x576',
    '1440x810',
    '2560x1440'
] as const

export const generateSrcSet = (baseUrl: string, collectionId: string, recordId: string, filename: string) => {
    return resolutions.map(resolution => {
        return `${baseUrl}/api/files/${collectionId}/${recordId}/${filename}?thumb=${resolution} ${resolution.split('x')[0]}w`;
    }).join(', ');
};
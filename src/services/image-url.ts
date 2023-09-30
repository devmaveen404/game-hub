import noImage from '../assets/no-image-placeholder.webp'
// 9, Optimize images
const getCroppedImageUrl = (url: string) => {
// 20, no Image cases
if (!url) return noImage 

    const index = url.indexOf('media/') + 'media/'.length
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
};

export default getCroppedImageUrl
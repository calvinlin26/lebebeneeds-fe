import { Avatar, AvatarFallback, AvatarImage } from "./based"

interface CustomAvatar {
    image? : string
    fallback?: string
    onLoadingStatusChange?: ()=> void
    className?: string
}

const CustomAvatar: React.FC<CustomAvatar> = ({image, fallback, onLoadingStatusChange, className}) => {
    return (
    <Avatar className={className}>
        <AvatarImage onLoadingStatusChange={onLoadingStatusChange} src={image} />
        <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
    )
}
export {CustomAvatar}
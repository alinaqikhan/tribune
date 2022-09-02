import Image from "next/image";

const TeamCard = ({ name, src, post, priority }) => {
    return (
        <div className="p-2 flex flex-col justify-center items-center">
            <div>
                <Image className="avatar" src={src} alt={name} width={200} height={200} objectFit="cover" priority={priority} />
            </div>
            <h4 className="font-medium font-stylish drop-shadow-lg text-xl">{name}</h4>
            <p className="text-xs font-stylish font-light">{post}</p>
        </div>
    );
};

export default TeamCard;

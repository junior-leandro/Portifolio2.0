
type Props = {
    name: string
}

export function ItemMenu({ name }: Props) {
    return (

        <button className="flex items-center gap-3">
            <span className="text-white">{name}</span>
        </button>
    )
}
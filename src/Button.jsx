
export default function Button({ children, onClick }) {

    return (
        <>
            <button className={children == 0 ? 'btn0' : 'btnLightGrey'} onClick={onClick}>{children}</button>
        </>
    )
}

export default function Button({ children, onClick }) {

    return (
        <>
            <button className={children == 0 ? 'btn0' : 'btnDarkGrey'} onClick={onClick}>{children}</button>
        </>
    )
}
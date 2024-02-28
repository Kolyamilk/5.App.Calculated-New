
export default function Button({ children, onClick }) {
    let operationsButton = children == '+' || children == '-' || children == '/' || children == '*' || children == '='
    function getClassButtons() {
        if (children == 0) {
            return 'btn0'
        } else if (operationsButton) {
            return 'btnOrange'
        }
        else if (children == 'AC' || children == 'CE' || children == '%') {
            return 'btnLightGrey'
        } else {
            return 'btnDarkGrey'
        }
    }
    return (
        <>
            <button className={getClassButtons()} onClick={onClick}>{children}</button>
        </>
    )
}
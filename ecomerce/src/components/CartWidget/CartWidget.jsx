
function CartWidget() {
    return (
        <a className="nav-link">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2 6h12l3 9H8" />
            </svg>
            <span className="badge text-bg-secondary">2</span>
        </a>
    )
}

export default CartWidget
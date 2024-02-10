
const ScrollToTop = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <button className="scroll-to-top" onClick={handleScrollToTop}>&#8682;</button>
    )
}

export default ScrollToTop;
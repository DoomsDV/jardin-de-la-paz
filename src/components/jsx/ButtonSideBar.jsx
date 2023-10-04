export function ButtonSidePanel() {
    let sidePanel = document.getElementById('sideBar');
    let bloqueo = document.getElementById('bloqueo');
    function showSidePanel() {
        sidePanel.style.right = '0px';
        bloqueo.classList.replace("hidden", "block");
    }
    return (
        <>
            <button className="hidden md:inline-block ml-5" title="Abrir panel lateral" type="button" onClick={showSidePanel}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-menu-2 text-slate-600"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 6l16 0"></path>
                    <path d="M4 12l16 0"></path>
                    <path d="M4 18l16 0"></path>
                </svg>
            </button>
        </>
    )
}

export function ButtonCloseSidePanel () {
    let sidePanel = document.getElementById('sideBar');
    let bloqueo = document.getElementById('bloqueo');
    function closeSidePanel() {
        sidePanel.style.right = '-20rem';
        bloqueo.classList.replace("block", "hidden");
    }
    return (
        <>
            <button title="Cerrar panel lateral" onClick={closeSidePanel}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x text-slate-600" width="25" height="25" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
                <path d="M9 9l6 6m0 -6l-6 6"></path>
            </svg>
            </button>
        </>
    )
}
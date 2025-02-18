import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="bg-purple-300  p-2 flex flex-row  justify-around w-[100vw] px-4">
            <Link to={'/'}>
                <div className="flex flex-row w-1/2">Note Making</div>

            </Link>
            <div className="flex flex-row w-1/2 justify-between">
                <Link to={'/AllNotes'}>
                    <div className="cursor-pointer">All Notes</div>
                </Link>
                <Link to={'/login'}>
                    <div className="cursor-pointer">Login</div>
                </Link>
                <Link to={'/signup'}>
                    <div className="cursor-pointer">signup</div>
                </Link>
                <Link to={'/add'}>
                    <div className="cursor-pointer">Add Note</div>
                </Link>
            </div>
        </div>
    )
}
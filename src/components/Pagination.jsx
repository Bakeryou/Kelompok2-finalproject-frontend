import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const maxPageButtons = 4;
    const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);
    const currentChunk = Math.ceil(currentPage / maxPageButtons);
    const chunkStart = (currentChunk - 1) * maxPageButtons;
    const chunkEnd = chunkStart + maxPageButtons;

    const visiblePageNumbers = pageNumbers.slice(chunkStart, chunkEnd);

    return (
        <div className="flex sm:justify-center mt-4 overflow-x-auto">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 hover:bg-[#D8AE7E] disabled:hover:bg-transparent rounded-lg disabled:opacity-50 flex items-center gap-2 font-semibold">
                <HiArrowNarrowLeft size={24} />
                Prev
            </button>
            {visiblePageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`px-4 py-2 mx-1 ${currentPage === number ? 'bg-[#D8AE7E] rounded-lg' : 'hover:bg-[#D8AE7E] rounded-lg'}`}>
                    {number}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 hover:bg-[#D8AE7E] disabled:hover:bg-transparent rounded-lg disabled:opacity-50 flex items-center gap-2 font-semibold">
                Next
                <HiArrowNarrowRight size={24}/>
            </button>
        </div>
    );
};

export default Pagination;

import React from 'react';

const CommentForm = () => {
    return (
        <div className="mt-10">
            <h4 className="font-bold text-xl">Comments:</h4>
            <form action="" className="">
                <textarea id="text" className="resize-none bg-transparent border border-gray-500 w-full py-1 px-2 mt-2 focus:border-gray-300" placeholder="New comment..." />

                <button type="submit" className='bg-primaryGreen hover:bg-green-700 transition-colors px-5 h-8 mt-2 text-[16px]'>
                    Add comment
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
const reviewForm = (props) => {

    const { onSubmit, onChange, rating, content } = props

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='rating'>Rating</label>
                <input type="text" name="rating" placeholder="rating" value={rating} onChange={onChange} />
            <label htmlFor="content">Content</label>
                <input type="text" name="content" placeholder="content" value={content} onChange={onChange} />
        </form>
    )

}

export default reviewForm
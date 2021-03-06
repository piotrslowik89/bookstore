import React from "react";
import AdminBookView from "./AdminBookView";

class AdminBookListing extends React.Component {
    render() {
        let list = <div>No books in state</div>;

        if (this.props.books && Array.isArray(this.props.books)) {
            list = this.props.books.map((book) => (
                <AdminBookView
                    book={book}
                    removeFromInventory={this.props.removeFromInventory}
                    editBook={this.props.editBook}
                />
            ));
        }

        return <div>{list}</div>;
    }
}

export default AdminBookListing;

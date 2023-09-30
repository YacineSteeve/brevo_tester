const invoiceTemplate = ({
    number,
    date,
    dueDate,
    customer,
    totalPrice
}) => {
    return `
        <html lang="en">
            <style>
                .content {
                    border: 1px solid black;
                    padding: 20px;
                }
            </style>
            <body>
                <h1>Company Name</h1>
                <div class="content">
                    <h2>Invoice #${number}</h2>
                    <br/>
                    <p>
                        <b>Date:</b> ${date}
                    </p>
                    <p>
                        <b>Due Date:</b> ${dueDate}
                    </p>
                    <p>
                        <b>Client:</b> ${customer}
                    </p>
                    <p>
                        <b>Total Price:</b> ${totalPrice}
                    </p>
                </div>
            </body>
        </html>
    `;
};

export { invoiceTemplate };

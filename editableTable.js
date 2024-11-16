customElements.define('com-custom-editabletable', class EditableTable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                table { width: 100%; border-collapse: collapse; }
                td, th { border: 1px solid #ccc; padding: 8px; }
                input { width: 100%; }
            </style>
            <table>
                <thead>
                    <tr><th>Name</th><th>Value</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" value="Sample Name"></td>
                        <td><input type="number" value="100"></td>
                    </tr>
                </tbody>
            </table>
        `;
    }
});

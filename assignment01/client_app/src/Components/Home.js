import '../App.css';

function Home(props) {
    return (
        <>
            {
                props.Data && props.Data.division && props.Data.events ?
                    <div className="App">
                        <h2> {props.Data.division} </h2>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr. No.</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Notes</th>
                                    <th scope="col">Bunting</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.Data && props.Data.division &&
                                    props.Data.events && props.Data.events.map((obj, index) => {
                                        return (<tr>
                                            <th scope="row">{index + 1} </th>
                                            <td>{obj.title} </td>
                                            <td>{obj.notes} </td>
                                            <td>{obj.bunting} </td>
                                            <td>{obj.date} </td>
                                        </tr>)
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                    :
                    <div className="App">
                        <h2>Events Not Found</h2>
                    </div>
            }
        </>

    );
}

export default Home;

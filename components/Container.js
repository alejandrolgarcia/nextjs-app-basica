import Head from 'next/head';
import Navigation from './Navigation';

const Container = (props) => {
    return (
        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
            </Head>
            <Navigation />
            <div className="container p-4">
                { props.children }
            </div>
        </div>
    )
}

export default Container;

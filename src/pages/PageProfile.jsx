import React, { useContext } from 'react';
import AuthContext from '../modules/AuthContext';
import Header from '../components/Header';

function PageProfile(props) {

    // get current user data
    const userObject = useContext(AuthContext)
    const user = userObject.user

    // format object to nice json format
    let sttr = JSON.stringify(user, null, "\t")
    sttr = JSON.stringify(user, null, 2)

    return (
        <>
            <Header />
            <main className='container mx-auto pt-6 pb-6'>
                <h1>Profile Page</h1>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, laborum? Facilis hic mollitia repellendus, ipsum ab perspiciatis accusamus aliquid laudantium rem nihil cumque corrupti impedit? Repudiandae quidem maxime voluptatem corrupti pariatur provident modi ut? Sapiente fugiat consectetur accusamus nihil adipisci veritatis qui quasi saepe dolore officia! Veniam nobis architecto laborum?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, laborum? Facilis hic mollitia repellendus, ipsum ab perspiciatis accusamus aliquid laudantium rem nihil cumque corrupti impedit? Repudiandae quidem maxime voluptatem corrupti pariatur provident modi ut? Sapiente fugiat consectetur accusamus nihil adipisci veritatis qui quasi saepe dolore officia! Veniam nobis architecto laborum?</p>

                <h1>profilum pageum the fox jumping over some shit, idk, idc</h1>
                <h2>profilum pageum the fox jumping over some shit, idk, idc</h2>
                <h3>profilum pageum the fox jumping over some shit, idk, idc</h3>
                <h4>profilum pageum the fox jumping over some shit, idk, idc</h4>
                <h5>profilum pageum the fox jumping over some shit, idk, idc</h5>
                <h6>profilum pageum the fox jumping over some shit, idk, idc</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti maxime harum vero possimus quibusdam debitis veniam assumenda quidem repellendus saepe, molestiae excepturi nisi, exercitationem perspiciatis voluptates dolorum. Voluptates rerum in est repellendus non magnam voluptatem ipsum nesciunt culpa. Maiores totam aliquam minima odit qui voluptatibus, tempore incidunt nam esse tenetur?</p>
                <p>Deleniti ratione dolorum aliquid cumque sequi dolore quod magnam error ipsa qui, et vitae ut sapiente optio rem molestiae sit illum eum temporibus. Corporis deleniti voluptas fuga voluptatibus ipsam perferendis numquam laudantium atque ipsa provident dolores sapiente magni, nostrum minima natus voluptates iste! Aperiam animi voluptatem assumenda enim cumque officiis.</p>
                <p>Aliquid autem eum animi vitae, fuga magni. Similique sed, aut fugiat aliquam molestiae cupiditate praesentium assumenda non sit nihil! Sit nulla, voluptas voluptates fugiat deserunt laboriosam harum aliquid nemo itaque commodi magnam repellendus. Laborum voluptas dolor sit architecto eaque deserunt at quis animi velit, perferendis reprehenderit, distinctio inventore quasi magnam.</p>

                <div className='bg-dark-400 p-4 overflow-x-auto'>
                    <p><strong>Username:</strong> {user.displayName}</p>
                    <p><strong>Email account:</strong> {user.email}</p>
                    <p><strong>Profile image:</strong> {user.photoURL}</p>
                    <pre className='text-md font-mono'>{sttr}</pre>
                </div>
            </main>
        </>
    );
}

export default PageProfile;
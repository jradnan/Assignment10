import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='mt-5 '>
            <h1 className='text-center my-3'>This is Blog</h1>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4"></div>
                        {/* Accordion */}
                        <div className="col-xl-4">
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> Difference between authorization and authentication</Accordion.Header>
                                    <Accordion.Body>
                                        ***Authentication***
                                        1. Authentication verifies who the user is.
                                        2.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                                        3.Authentication is the first step of a good identity and access management process.
                                        4.Authentication is visible to and partially changeable by the user.
                                        ***Example***: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.

                                        ***Authorization***
                                        1.Authorization determines what resources a user can access.
                                        2.Authorization works through settings that are implemented and maintained by the organization.
                                        3.Authorization always takes place after authentication.
                                        4.Authorization isn’t visible to or changeable by the user.
                                        ***Example***: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                                    <Accordion.Body>
                                        ***1ST ANSWER IS*** because it is a very easy to use and no worry about hacks or spam and it is a great authentication system


                                        ***2ND ANSWER IS***
                                        actually, I am a very beginner that's why I don't have deep knowledge of authentication
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                                    <Accordion.Body>
                                        There are many services which Firebase provides, Most useful of them are:

                                        1. Cloud Firestore
                                       2. Cloud Functions
                                        3. Authentication
                                        4. Hosting
                                        5. Cloud Storage
                                        6. Google Analytics
                                        7. Predictions
                                        8. Cloud Messaging
                                        9. Dynamic Links
                                        10. Remote Config
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        {/* Accordion end */}
                        <div className="col-xl-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
export default function Skills() { 
    return(
            <div className="container bg-white py-5">
                    <div className="row px-3">
                        <div className="col-12">
                            <h2 className="title position-relative pb-2 mb-4">Skills</h2>
                        </div>
                        <div className="col-sm-6">
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">HTML</p>
                                    <p className="mb-2">95%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">CSS</p>
                                    <p className="mb-2">85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">PHP</p>
                                    <p className="mb-2">90%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">Javascript</p>
                                    <p className="mb-2">90%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">Angular JS</p>
                                    <p className="mb-2">95%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">Wordpress</p>
                                    <p className="mb-2">85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    )

}
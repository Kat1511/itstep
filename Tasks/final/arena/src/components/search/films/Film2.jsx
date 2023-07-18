const React = require("react");


const Film2 = () => {

    return <>
        <div className="container">
            <div className="card-film">
             <div className="card-film-item">
                <div className="card-film-item-title">
                    <h1>Oppenheimer</h1>
                </div>
                <div className="card-film-item-desc">
                    <div className="film-item-img">
                        <img  className="cards-img" src="/public/assets/img/card/card-img-3.jpeg" alt="film"/>
                    </div>
                    <div className="film-item-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et libero voluptates, aut sequi nesciunt ex illo nisi, perspiciatis ad dolor saepe? Adipisci, molestias quaerat? Tenetur fugit itaque esse. Consectetur.
                            Voluptas et nobis expedita earum similique voluptatibus! Optio ipsa, aspernatur temporibus culpa cumque ipsum, iusto labore error earum deserunt dolor quidem. Beatae, nisi optio sequi error perferendis dolorem illo aperiam!
                            Iusto quasi est aspernatur praesentium provident in quo autem fugit nihil asperiores ea quia dolorum culpa tempora similique repellat eos nobis accusamus, dolor rem laudantium distinctio sapiente cum architecto! Officiis?
                        </p>
                    </div>
                    <div className="film-item-report">
                        <div class="report-item">
                            <div class="report-name">Time</div>
                            <div class="report-value">163 мин.</div>
                        </div>
                        <div class="report-item">
                            <div class="report-name">Premiere</div>
                            <div class="report-value">14 07, июня</div>
                        </div>
                        <div class="report-item">
                            <div class="report-name">Director</div>
                            <div class="report-value">Rebecca Sheridan, Laura Miles, Christopher McQuarrie, Zoe Morgan, Wade Eastwood</div>
                        </div>
                        <div class="report-item">
                            <div class="report-name">Genre</div>
                            <div class="report-value">Action</div>
                        </div>
                        <div class="report-item">
                            <div class="report-name">Actors</div>
                            <div class="report-value">Pom Klementieff, Angela Bassett, Simon Pegg, Rob Delaney, Shea Whigham, Tom Cruise, Rebecca Ferguson, Vanessa Kirby, Ving Rhames, Hayley Atwell, Mark Gatiss, Henry Czerny, Cary Elwes, Charles Parnell, Greg Tarzan Davis, Sam Kalidi, Ross Donnelly, Esai Morales, Indira Varma</div>
                        </div>
                    </div>
                </div>
             </div>
             <h2>program</h2>
             <div className="program-item-wrapper">
                <div className="program-item">
                <div class="program-item-left">
                    <div class="cinemaContacts">
                        <h6>Kino Arena Grand Mall Varna</h6>
                        <p>GR. Varna, STR. ACAD. Andrey Sakharov, Shopping Center</p>
                        <p>Phone: 0898 460 557</p>
                    </div>
                </div>
                        <div className="program-item-desc">
                            <span className="premire-date">Premiere 14 07, Friday</span>
                            <span className="premire-text">Buy ticket</span>
                            <div className="program-item-tickets">
                            <div className="program-item-2d">
                                <div className="program-item-2d-img">
                                    <img src="../../../public/assets/img/logo/2D.png" alt="2D" />
                                </div>
                                <div className="program-item-2d-link">
                                     <ul>
                                        <li><a className="program-item-link" href="/login">16:40</a></li>
                                        <li><a className="program-item-link" href="/login">19:00</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="program-item-imax">
                                <img src="../../../public/assets/img/logo/imax-2d.png" alt="imax-2d" />
                                <div className="program-item-bow-link">
                                    <ul>
                                        <li> <a className="program-item-link" href="/login">21:00</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div> 
                    </div>
                    <div className="program-item">
                <div class="program-item-left">
                    <div class="cinemaContacts">
                        <h6>Kino Arena Deluxe</h6>
                        <p>Sofia, 69  Bulgaria Blvd., Bulgaria Mall Shopping Center</p>
                        <p>Phone: 0898 460 557</p>
                    </div>
                </div>
                        <div className="program-item-desc">
                            <span className="premire-date">Premiere 14 07, Friday</span>
                            <span className="premire-text">Buy ticket</span>
                            <div className="program-item-tickets">
                            <div className="program-item-2d">
                                <div className="program-item-2d-img">
                                    <img src="../../../public/assets/img/logo/2D.png" alt="2D" />
                                </div>
                                <div className="program-item-2d-link">
                                     <ul>
                                        <li><a className="program-item-link" href="/login">13:40</a></li>
                                        <li><a className="program-item-link" href="/login">16:00</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="program-item-imax">
                                <img src="../../../public/assets/img/logo/imax-2d.png" alt="imax-2d" />
                                <div className="program-item-bow-link">
                                    <ul>
                                        <li> <a className="program-item-link" href="/login">16:00</a></li>
                                        <li><a className="program-item-link" href="/login">19:00</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div> 
                    </div>
             </div>
             
            </div>
        </div>
    </>
}

module.exports = Film2;
export default function Login() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const navigate = useNavigate();

    const [user, setUser] = useState("")
    let [pass, setPass] = useState("")
    const [mssg, setMssg] = useState("")


    function setUserName(e) {

        setUser(e.target.value)
    }

    function setPassword(e) {

        setPass(e.target.value)
    }

    function sendUserDetails() {

        

        let details = {
            username: user,
            password: pass
        }

        console.log(details)

        let demo = JSON.stringify(details)

        fetch("http://localhost:8080/MiniApplication/Login",
            {
                method: 'POST',
                headers: { 'Content-type': 'application/json', 'Accept': '*/*' },
                body: demo
            }).then(r => {
                return r.json()
            }).then(res => {
                console.log(res)
                if (res != null) {
                    window.sessionStorage.setItem("userid", res);
                    navigate('/Home')
                    window.location.reload();
                }
                else {
                    setMssg("Invalid Username or Password!")
                }
            }
        )
    }

    return (
        <div>
            <LogoBar />
            <div id="login" className="container shadow p-5" style={{ maxWidth: "500px" }}>
                <h3 style={{ marginBottom: "50px" }}>Login</h3>
                <form>
                    <div className="form-outline mb-4">
                        <input onBlur={setUserName} type="text" id="form2Example1" className="form-control" />
                        <label className="form-label" htmlFor="form2Example1">Username</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input onBlur={setPassword} type="password" id="form2Example2" className="form-control" />
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                    </div>
                    <h6 style={{ marginTop: "10px", color: "red" }}>{mssg}</h6>
                    <button onClick={() => { sendUserDetails() }} type="button" className="btn btn-primary btn-block mb-4">Login</button>
                </form>
                
            </div>
            <Footer />
        </div>
    )
}
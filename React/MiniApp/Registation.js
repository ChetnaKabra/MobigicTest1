function YUser() {
    const [mssg, setMssg] = useState();
    const [username, setUserName] = useState();
    const [usertest, setUsertest] = useState()
    const [validation, setValidation] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleBlur = (event) => {
        console.log(typeof (event.target.value))

        if (event.target.value == "") {
            setValidation("Please Enter Username")
            setUsertest(false)
        }
        else {
            fetch("http://localhost:/MiniApplication/Users/username" + event.target.value)
                .then(r => {
                    return r.json()
                }).then(res => {

                    if (res == false) {
                        setValidation("Username already exists")
                        setUsertest(false)
                    }
                    else {
                        setUsertest(true)
                    }
                });
        }
    }

const formik = useFormik({
    initialValues: {
        username: '',
        password: '',
    },
    validationSchema: yup.object({
        username: yup.string()
            .required('Please Enter User Name'),

        password: yup.string()
            .required('Please Enter your Password'),

           }),
onSubmit: values => {

    console.log(values.username)
    console.log(values.password)

    let demo = JSON.stringify(values)
    console.log(values)

    if (usertest != false) {
        fetch("http://localhost:44344/MiniApp/User)",
            {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: demo
            }).then(r => {
                return r.json()
            }).then(res => {
                window.sessionStorage.setItem("userid", res.U_Id)
                console.log(res)
                setMssg(res)

                navigate("/Address")
            });
    }
},
});

return (
    <div>
        <LogoBar />
        <div className="container shadow p-5" style={{ maxWidth: "500px", marginTop: "100px" }}>
            <h1>Registration</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <p>
                        <label className="form-label" htmlFor="username">Username : </label>
                        <input id="username" className="form-control" placeholder='Enter User Name' onKeyUp={formik.handleBlur} type="text" name="U_First_Name"
                            value={formik.values.U_First_Name}
                            {...formik.getFieldProps("username")}></input>
                        {formik.touched.username && formik.errors.username ?
                            <span style={{ color: 'red' }}>{formik.errors.username}</span> : null}
                    </p>
                </div>

                <div className='form-group'>
                    <p>
                        <label className="form-label" htmlFor="password">Password : </label>
                        <input id="password" className="form-control" placeholder='Enter Password' type="text" name="password"
                            value={formik.values.password}
                            {...formik.getFieldProps("password")}></input>
                        {formik.touched.password && formik.errors.password ? <span style={{ color: 'red' }}>{formik.errors.password}</span> : null}
                    </p>
                </div>

                <button className="register" type="submit">Register</button>
                {(mssg != null) ? <h4>Registered Successfully</h4> : <h3></h3>}
            </form>
        </div>
        <div>
            <Footer />
        </div>
    </div>
)
}

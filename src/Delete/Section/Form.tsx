import { useState } from "react"
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { LuCircleUser, LuCircleUserRound, LuEye, LuEyeOff, LuLaugh, LuVolleyball } from "react-icons/lu";

interface FormProps {
    firstname: string;
    lastname: string;
    email: string;
    country: string;
    icon: string;
    password: string;
}

export const Form = () => {
    const emptyForm: FormProps = { firstname: '', lastname: '', email: '', country: '', icon: '', password: '', }
    const [form, setForm] = useState<FormProps>(emptyForm);
    const handleClear = () => setForm(emptyForm)

    const [seePassword, setSeePassword] = useState<boolean>(false)
    const handleSeePassword = () => setSeePassword(!seePassword)

    const isEmpty: boolean = form.email == '' && form.lastname == '' && form.firstname == '' && form.password == '' && form.country == '' && form.icon == '';

    const countries = [
        "France", "United States", "Morocco", "Portugal", "Germany", "Italy", "Spain",
        "United Kingdom", "Canada", "Australia", "Brazil", "Japan", "China", "India", "Mexico",
        "Russia", "South Africa", "Argentina", "South Korea", "Saudi Arabia", "Egypt", "Turkey",
        "Sweden", "Norway", "Denmark", "Netherlands", "Belgium", "Switzerland", "Poland", "Greece",
        "Finland",
    ];

    const icons = [{ icon: LuVolleyball, value: 'LuVolleyball' }, { icon: LuLaugh, value: 'LuLaugh' }, { icon: LuCircleUserRound, value: 'LuCircleUserRound' }, { icon: LuCircleUser, value: 'LuCircleUser' }]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`
            firstname: ${form.firstname}
            lastname: ${form.lastname}
            email: ${form.email}
            country: ${form.country}
            icon: ${form.icon}
            password: ${form.password}`
        )
    };

    const labelClass = "ml-1 font-medium text-sm text-neutral-700 dark:text-neutral-200 capitalize";
    const inputClass = "w-full focus:outline-none focus:ring-2 border-0 rounded-md placeholder-neutral-400 dark:placeholder-neutral-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 disabled:cursor-not-allowed disabled:opacity-75";
    const iconRightClass = "absolute bottom-0 -translate-y-1/2 right-2 flex items-center"
    const radioLabelClass = "text-neutral-400 dark:text-neutral-500 has-checked:text-blue-500 transition-colors cursor-pointer"

    return (
        <form onSubmit={handleSubmit} id="form" className="relative p-5">
            <button className={`absolute top-2 right-2 flex items-center justify-center hover:scale-110 transition-all ${isEmpty ? 'opacity-0 invisible' : 'opacity-100 visible'}`} type="button" onClick={handleClear}><IoIosClose size={20} /></button>
            <div className="flex flex-wrap justify-between space-y-2 mb-4">

                <div className="flex flex-col w-[calc(50%-0.5rem)]">
                    <label htmlFor="firstname">
                        <span className={labelClass}>Firstname</span>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={form.firstname}
                            className={inputClass}
                            placeholder="Firstname"
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="flex flex-col w-[calc(50%-0.5rem)]">
                    <label className={labelClass} htmlFor="lastname">
                        <span className={labelClass}>Lastname</span>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={form.lastname}
                            className={inputClass}
                            placeholder="Lastname"
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="flex flex-col w-[calc(50%-0.5rem)]">
                    <label htmlFor="country" className="relative">
                        <span className={labelClass}>Country</span>
                        <select
                            required
                            id="country"
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            className={`${inputClass} appearance-none`}
                        >
                            <option selected disabled value="">Select a country</option>
                            {countries.sort().map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <span className={`${iconRightClass} pointer-events-none`}>
                            <IoIosArrowDown />
                        </span>
                    </label>
                </div>

                <div className="flex flex-col w-[calc(50%-0.5rem)]">
                    <span className={`${labelClass} mb-1.5`}>Icon</span>
                    <div className="relative flex gap-1.5 [&_input]:hidden ml-1">
                        {icons.map((i) =>
                            <div key={i.value}>
                                <label htmlFor={i.value} className={radioLabelClass}>
                                    <i.icon size={26} />
                                    <input type="radio" name="icon" required id={i.value} value={i.value} checked={form.icon == i.value} onChange={handleChange} />
                                </label>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="email">
                        <span className={labelClass}>Email</span>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            className={inputClass}
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="flex flex-col w-full">
                    <label className="relative" htmlFor="password">
                        <span className={labelClass}>Password</span>
                        <input
                            id="password"
                            name="password"
                            value={form.password}
                            className={inputClass}
                            placeholder="Password"
                            onChange={handleChange}
                            type={seePassword ? 'text' : 'password'}
                        />
                        <button className={`${iconRightClass} cursor-pointer`} type="button" onClick={handleSeePassword}>
                            <span>
                                {seePassword ? <LuEyeOff /> : <LuEye />}
                            </span>
                        </button>
                    </label>
                </div>
            </div>
            <button type="submit" className="disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-black bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-900 aria-disabled:bg-neutral-900 dark:bg-neutral-200 dark:hover:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 w-full flex justify-center items-center">Submit</button>
        </form>
    );
};

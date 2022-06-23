
const getApplication = (id) => {
    return new Promise((resolve, reject) => {
        resolve({
            id: id,
            name: 'My Application',
            icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
            link: 'https://www.google.com'
        });
    }
    );
}

const getApplications = () => {
    return new Promise((resolve, reject) => {
        resolve([
            {
                id: 1,
                name: 'My Application',
                icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                link: 'https://www.google.com'
            },
            {
                id: 2,
                name: 'My Application',
                icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                link: 'https://www.google.com'
            },
        ]);
    }
    );
}




const applicationService = {
    getApplications,
    getApplication
}

export default applicationService;
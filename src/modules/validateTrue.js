const validateTrue = (massive) => {
        massive.forEach(elem => {
            if (elem.type === 'tel') {
    
                (elem.value.length >= 6 && elem.value.length <= 12) ? (
                    elem.classList.add('success'),
                    elem.classList.remove('error')
                ) : (
                    elem.classList.add('error'),
                    elem.classList.remove('success')
                );
                
            }
    
            if (elem.type === 'text') {
    
                (elem.value.length >= 2) ? (
                    elem.classList.add('success'),
                    elem.classList.remove('error')
                ) : (
                    elem.classList.add('error'),
                    elem.classList.remove('success')
                );
    
            }
    
            if (elem.type === 'email') {
    
                (/\.[a-zA-Z]{2,}$/.test(elem.value)) ? (
                    elem.classList.add('success'),
                    elem.classList.remove('error')
                ) : (
                    elem.classList.add('error'),
                    elem.classList.remove('success')
                );
    
            }
    
            if (elem.name === 'user_message') {
                elem.classList.add('success');
                elem.classList.remove('error')
            }
        });
    
        let success = true;
        massive.forEach(input => {
            if (!input.classList.contains('success')) {
                success = false
            }
        })
        return success
    
    
        
    }

    

export { validateTrue }
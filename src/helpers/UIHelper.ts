export function returnDate(date: string | undefined): string | null {
    if (date) {
        const dateObj = new Date(date);
        let dd: string | number = dateObj.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm: string | number = dateObj.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy: string | number = dateObj.getFullYear();
        if (yy < 10) yy = '0' + yy;
        
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes();

        return `${dd}.${mm}.${yy} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        
    } else {
        return null;
    }  
}
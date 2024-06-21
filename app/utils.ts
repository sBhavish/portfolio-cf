export function convertDateString(inputDateString: string): string {
    const date: Date = new Date(inputDateString);

    const formattedDate: string = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).format(date);

    return formattedDate;
}

export type DateFormat = 'YYYY-MM-DD' | 'DD/MM/YYYY' | 'DD-MM-YYYY' | 'YYYY-MM-DD HH:mm:ss';

export function formatDateString(dateString: string|undefined, format: DateFormat): string {
    const date = new Date(dateString ? dateString : new Date());

    const padZero = (number: number): string => (number < 10 ? '0' + number : number.toString());

    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1); // Months are zero-indexed
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());

    const formattedDate = format
        .replace('YYYY', year.toString())
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);

    return formattedDate;
}

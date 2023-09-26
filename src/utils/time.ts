export function leftFillZero(num, targetLength = 2) {
    return num.toString().padStart(targetLength, '0')
}

/**
 * 获取当前时间，格式为 YYY-MM-DD HH:MM:SS
 */
export function getCurDate() {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const day = now.getDate()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const second = now.getSeconds()

    return `${year}-${leftFillZero(month)}-${leftFillZero(day)} ${leftFillZero(
        hour,
    )}:${leftFillZero(minute)}:${leftFillZero(second)}`
}

import { z } from "zod"

// Настройка глобальной обработки ошибок Zod
z.config({
  customError: (issue) => {
    if (issue.code === "too_small" || issue.code === "too_big") return ""

    return undefined
  },
})

export { z }

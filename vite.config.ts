import babel from "@rolldown/plugin-babel"
import tailwindcss from "@tailwindcss/vite"
import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import * as antd from "antd"
import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    AutoImport({
      imports: [
        "react",
        {
          "react-hook-form": [
            "useForm",
            "useFieldArray",
            "useWatch",
            "useController",
            "useFormContext",
          ],
          "@tanstack/react-query": [
            "useQuery",
            "useMutation",
            "useQueryClient",
            "useInfiniteQuery",
          ],
          antd: Object.keys(antd).filter(
            (key) => !key.startsWith("_") && key !== "version" && key !== "default"
          ),
          "@reduxjs/toolkit": [
            "useSelector",
            "useDispatch",
            "useStore",
            "createSlice",
            "createAsyncThunk",
            "createAction",
            "createReducer",
            "createSelector",
            "configureStore",
            "combineReducers",
            "nanoid",
          ],
          "@ant-design/icons": [["*", "AntdIcons"]],
          zod: ["z"],
        },
      ],
      dts: "./src/auto-imports.d.ts",
      defaultExportByFilename: true,
    }),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

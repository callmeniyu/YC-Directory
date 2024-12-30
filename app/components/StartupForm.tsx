"use client"
import React, { useActionState, useState } from "react"
import { Input } from "./ui/input"
import MDEditor from "@uiw/react-md-editor"
import { Button } from "./ui/button"
import { Send } from "lucide-react"
import { error } from "console"
import { stat } from "fs"
import { title } from "process"
import { formSchema } from "@/lib/validation"

const StartupForm = () => {
    const [pitch, setPitch] = useState("")

    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleSubmit = async(prevState:any, formData: FormData) => {
        try {
            const formValues = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                link: formData.get("link") as string,
                pitch,
            }

            await formSchema.parseAsync(formValues);

            // const result = await createIdea(prevState, formData, pitch)
            console.log(formValues);
            
        } catch (error) {
            
        }
    }
    
    const [state, formAction, isPending] = useActionState(handleSubmit, {
        error: "",
        status: "INITIAL",
    })

    return (
        <form action={() => {}} className="startup-form">
            <div>
                <label htmlFor="title" className="startup-form_label">
                    Title
                </label>
                <Input id="title" name="title" className="startup-form_input" required placeholder="Startup Title" />
                {errors.title && <p className="startup-form_error">{errors.title}</p>}
            </div>
            <div>
                <label htmlFor="description" className="startup-form_label">
                    Description
                </label>
                <Input
                    id="description"
                    name="description"
                    className="startup-form_textarea"
                    required
                    placeholder="Startup Description"
                />
                {errors.description && <p className="startup-form_error">{errors.description}</p>}
            </div>
            <div>
                <label htmlFor="category" className="startup-form_label">
                    Category
                </label>
                <Input
                    id="category"
                    name="category"
                    className="startup-form_input"
                    required
                    placeholder="Startup category (Tech, Health, etc)"
                />
                {errors.category && <p className="startup-form_error">{errors.category}</p>}
            </div>
            <div>
                <label htmlFor="link" className="startup-form_label">
                    Image URL
                </label>
                <Input
                    id="Image URL"
                    name="Image URL"
                    className="startup-form_input"
                    required
                    placeholder="Startup Image URL"
                />
                {errors.link && <p className="startup-form_error">{errors.link}</p>}
            </div>
            <div data-color-mode="light">
                <label htmlFor="pitch" className="startup-form_label">
                    Pitch
                </label>
                <MDEditor
                    value={pitch}
                    onChange={(value) => setPitch(value as string)}
                    id="pitch"
                    preview="edit"
                    height={300}
                    style={{ borderRadius: 20, overflow: "hidden" }}
                    textareaProps={{
                        placeholder:"Briefly describe your idea and what problem it solves",
                    }}
                    previewOptions={{
                        disallowedElements: ["style"],
                    }}
                />
                {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
            </div>

            <Button
                type="submit"
                className="startup-form_btn text-white"
                disabled={isPending}
            >
                {isPending ? "Submitting..." : "Submit Your Pitch"}
                <Send className="size-6 ml-2" />
            </Button>
        </form>
    )
}

export default StartupForm
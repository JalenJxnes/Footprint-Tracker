'use client'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import '../app/global.css';
import {Checkbox} from '@/components/ui/checkbox';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {useForm} from "react-hook-form";
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {Card} from '@radix-ui/themes';
import {useState} from 'react';
import {CardHeader, CardTitle} from '@/components/ui/card';

const formValidationSchema = z.object({
    noOfPeople: z.number().min(1, {message: "Number should be at least 1"}),
    vehiclesCount: z.number().min(0, {message: "Number should be at least 0"}),
    milesDriven: z.number().min(0, {message: "Number should be at least 0"}),
    milesPerGallon: z.number().min(1, {message: "Number should be at least 1"}),
    homeSize: z.number().min(1, {message: "Number should be at least 1"}),
    heatingFuel: z.string().nonempty({message: "Please select a heating fuel"}),
    aluminumSteel: z.boolean().default(false),
    plastic: z.boolean().default(false),
    glass: z.boolean().default(false),
    newspaper: z.boolean().default(false),
    magazines: z.boolean().default(false),
});

export default function Page() {
    const [emission, setEmission] = useState<any>(null);
    const form = useForm({
        resolver: zodResolver(formValidationSchema),
    });
    const onSubmit = (data: any) => {
        console.log(data);
        fetch('/api/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((response) => {

                return response.json();
            }
        ).then((data) => {
            console.log(data);
            setEmission(data);
        }).catch((error) => {
            console.error('Error:', error);
        });
    }


    return (
        <div className="min-h-screen flex justify-center items-center">
            <Card className="border-solid border-2">
                <CardHeader className="flex items-center justify-between">
                    <CardTitle>Footprint Calculator</CardTitle>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="p-8 rounded-lg shadow-md space-y-6 w-96">
                        <FormField
                            control={form.control}
                            name="noOfPeople"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Number of People in Home</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field}
                                               onChange={(e) => field.onChange(Number(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="vehiclesCount"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Number of Vehicles</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field}
                                               onChange={(e) => field.onChange(Number(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage/>

                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="milesDriven"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Miles Driven Yearly</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field}
                                               onChange={(e) => field.onChange(Number(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage/>

                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="milesPerGallon"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Average Miles Per Gallon</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field}
                                               onChange={(e) => field.onChange(Number(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage/>

                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="homeSize"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Home Size (in square feet)</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field}
                                               onChange={(e) => field.onChange(Number(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage/>

                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="heatingFuel"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Primary Heating Fuel</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a primary heating fuel"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Electricity">Electricity</SelectItem>
                                            <SelectItem value="Natural Gas">Natural Gas</SelectItem>
                                            <SelectItem value="Heating Oil">Heating Oil</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>

                                </FormItem>
                            )}
                        />


                        {/* Add waste recycling options */}
                        {['aluminumSteel', 'plastic', 'glass', 'newspaper', 'magazines'].map((item) => (
                            <FormField
                                key={item}
                                control={form.control}
                                name={item}
                                render={({field}) => (
                                    <FormItem className="flex items-center justify-between">
                                        <FormLabel>Do you recycle {item}? </FormLabel>
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={(isChecked) => field.onChange(isChecked)}
                                            />
                                        </FormControl>

                                    </FormItem>
                                )}
                            />
                        ))}

                        <FormItem>
                            <FormControl>
                                <Button type="submit">Submit</Button>
                            </FormControl>
                        </FormItem>

                    </form>
                </Form>
                {emission ?
                    <Card className="border-solid flex border-2 m-2 rounded-lg p-4">
                        <p>Daily emittions: {emission.dailyCO2}</p>
                        <p>Yearly emittions: {emission.yearlyCO2}</p>
                        <p>Recommendations: {emission.recommendations}</p>
                    </Card> : ""
                }

            </Card>
        </div>
    )
}

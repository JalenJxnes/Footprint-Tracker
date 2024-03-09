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
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

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

export default function Calculator() {
    const [emission, setEmission] = useState<any>(null);

    const form = useForm({
        resolver: zodResolver(formValidationSchema),
    });

    const [recommendations, setRecommendations] = useState('');

    const onSubmit = (data: any) => {

        setRecommendations("Loading...");

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
            setEmission(data);
        }).catch((error) => {
            console.error('Error:', error);
        });
    }


    return (
'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import '../app/global.css';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from '@radix-ui/themes';
import { useState } from 'react';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const formValidationSchema = z.object({
    noOfPeople: z.number().min(1, { message: "Number should be at least 1" }),
    vehiclesCount: z.number().min(0, { message: "Number should be at least 0" }),
    milesDriven: z.number().min(0, { message: "Number should be at least 0" }),
    milesPerGallon: z.number().min(1, { message: "Number should be at least 1" }),
    homeSize: z.number().min(1, { message: "Number should be at least 1" }),
    heatingFuel: z.string().min(1, { message: "Please select a heating fuel" }),
    aluminumSteel: z.boolean().default(false),
    plastic: z.boolean().default(false),
    glass: z.boolean().default(false),
    newspaper: z.boolean().default(false),
    magazines: z.boolean().default(false),
});

export default function Calculator() {
    const [emission, setEmission] = useState<any>(null);

    const form = useForm({
        resolver: zodResolver(formValidationSchema),
    });

    const [error, setError] = useState(false)

    const onSubmit = (data: any) => { 
        fetch('https://github.com/JalenJxnes/Footprint-Tracker/blob/38148c2e29a23e99a23492c560f42b8159bd5ec1/src/app/api/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': './application/json',
            },
            body: JSON.stringify(data),
        }).then((response) => {
            return response.json();
        }
        ).then((data) => {
            setEmission(data);
        }).catch((error) => {
            setError(true);
            console.error('Error:', error);

        });
    }


    return (
        <div>
            <Card>
        <div>
            <Card className="border-solid border-2  rounded-lg shadow-md">
                <CardHeader className="flex items-center justify-between">
                    <CardTitle>EcoTrack Calculator</CardTitle>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2">
                        <div className="w-[340px] p-8 rounded-lg shadow-md space-y-6">
                        <FormField
                            control={form.control}
                            name="noOfPeople"
                            render={({field}) => (
                                <FormItem className='flex flex-row justify-between'>
                                    <FormLabel className='mt-5'>Number of People in Home</FormLabel>
                                    <FormControl className='w-20'>
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
                                <FormItem className='flex flex-row justify-between'>
                                    <FormLabel className='mt-5'>Number of Vehicles</FormLabel>
                                    <FormControl className='w-20'>
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
                                <FormItem className='flex flex-row justify-between'>
                                    <FormLabel className='mt-5'>Miles Driven Yearly</FormLabel>
                                    <FormControl className='w-20'>
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
                                <FormItem className='flex flex-row justify-between'>
                                    <FormLabel className='mt-5'>Average Miles Per Gallon</FormLabel>
                                    <FormControl className='w-20'>
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
                                <FormItem className='flex flex-row justify-between'>
                                    <FormLabel className='mt-5'>Home Size (in square feet)</FormLabel>
                                    <FormControl className='w-20'>
                                        <Input type="number" {...field}
                                               onChange={(e) => field.onChange(Number(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        </div>
                        <div className="p-8 rounded-lg shadow-md flex flex-col justify-between">
                        {['aluminum and steel', 'plastic', 'glass', 'newspaper', 'magazines'].map((item) => (
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
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div></div>
                        <FormItem className="flex justify-end mb-4 mr-8">
                            <FormControl>
                                <Button type="submit">Submit</Button>
                            </FormControl>
                        </FormItem>
                    </form>
                </Form>

                {emission ?
                    <Card className="border-solid flex border-2 m-2 rounded-lg p-4 w-[680px]">
                        <div className='flex flex-row justify-around items-center mb-4'>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Category</TableHead>
                                        <TableHead className='text-center'>Description</TableHead>
                                        <TableHead className='text-right'>Calculation</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Daily CO2</TableCell>
                                        <TableCell className='text-center'>Description here</TableCell>
                                        <TableCell className='text-right'>{emission.dailyCO2} lbs</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Yearly CO2</TableCell>
                                        <TableCell className='text-center'>Description here</TableCell>
                                        <TableCell className='text-right'>{emission.yearlyCO2} lbs</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Vehicle Total CO2</TableCell>
                                        <TableCell className='text-center'>Description here</TableCell>
                                        <TableCell className='text-right'>{emission.totalLbsCO2ForVehicles} lbs</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Vehicle Daily CO2</TableCell>
                                        <TableCell className='text-center'>Description here</TableCell>
                                        <TableCell className='text-right'>{emission.avgLbsCO2PerDayForVehicles} lbs</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Daily Home CO2</TableCell>
                                        <TableCell className='text-center'>Description here</TableCell>
                                        <TableCell className='text-right'>{emission.avgLbsCO2PerKWhDayForHome} lbs</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <p>{emission.recommendations}</p>
                    </Card>
                    : ""
                }

                {error && !emission ?
                    <Card>
                        <div className='flex flex-row justify-around items-center mb-4'>
                            <p>Error fetching data...</p>
                        </div>
                    </Card>
                    : ""
                }
            </Card>
        </div>
    )
}
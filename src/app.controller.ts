import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

    @Get('/')
    index() {
        return { 
            status: 200,
            message: 'Welcome, this is a Discord API proxy service that allows you to fetch user profile data, avatar, banner, and badge icons.',
            endpoints: [
                {
                    path: '/v1/user/id',
                    description: 'Get user profile data'
                },
                {
                    path: '/v1/avatar/id',
                    description: 'Get user avatar image'
                },
                {
                    path: '/v1/banner/id',
                    description: 'Get user banner image'
                },
                {
                    path: '/v1/badge/id.png',
                    description: 'Get badge icon image'
                }
            ]
        }
    }
}

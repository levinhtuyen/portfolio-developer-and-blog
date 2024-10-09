---
title: 'Hướng dẫn quản lý xác thực người dùng trong React.js, Next.js, Vue.js và Nuxt.js bằng Clerk'
description: 'Xác thực là một thành phần rất quan trọng đối với bất kỳ phần mềm, ứng dụng hay hệ thống nào. Nó cung cấp một lớp bảo mật bổ sung bằng cách hạn chế quyền truy cập vào các khu vực nhất định của ứng dụng. Ví dụ như bảng điều khiển với thông tin quan trọng, nó không thể được truy cập trừ khi người dùng đã được xác thực. Tất nhiên, chúng ta có thể triển khai hệ thống đăng ký và đăng nhập với tên người dùng, email và mật khẩu, sau đó người dùng nhận được email để xác thực email và chỉ sau đó người dùng mới có thể truy cập nội dung được phép cho những người đã được xác thực...'
image: '/images/post-4.png'
date: '07/10/2024'
author: '@BizCloud2655'
---

Luồng này vẫn rất phổ biến, nhưng nó có các bước bổ sung mà nhiều người dùng cảm thấy nhàm chán, vì xác thực bằng nhà cung cấp, có thể là Google, Microsoft, Apple hoặc các nhà cung cấp khác, đơn giản hơn nhiều, chỉ với một vài cú nhấp chuột, bạn có thể được xác thực và bạn thậm chí không phải rời khỏi màn hình hiện tại bạn đang ở. Sự dễ dàng truy cập này chắc chắn nên được xem xét khi xây dựng ứng dụng của bạn để người dùng có thể chọn ứng dụng nào họ muốn.

Trong bài viết này, chúng ta sẽ sử dụng Clerk với React.js và Next.js. Thật không may, Clerk chưa được hỗ trợ đầy đủ cho các ứng dụng Vue.js hoặc Nuxt.js. Trong tài liệu chính thức của Clerk, chúng ta có thể tìm thấy đề cập đến Vue.js nhưng để sử dụng nó thông qua SDK.

<strong>Tích hợp Clerk với Nuxt.js</strong>

Các ứng dụng Nuxt.js yêu cầu sử dụng Vue-clerk và một số bước bổ sung để làm cho Clerk hoạt động với kiến ​​trúc Nuxt.js. Đó là một quy trình khác giống như với Next.js vì cả hai công nghệ đều có mục đích tương tự.

Trong nuxt.config.ts, chúng ta thêm mô-đun vue-clerk/nuxt vào mảng mô-đun và bằng cách đó, tất cả các thành phần và composables sẽ được tự động nhập

     // nuxt.config.ts
     export default defineNuxtConfig({
       modules: ['vue-clerk/nuxt'],
       clerk: {
         appearance: {},
       }
     })

Và bây giờ các biến môi trường được thêm vào tệp môi trường của bạn:

     NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
     NUXT_CLERK_SECRET_KEY=your_secret_key

Các biến môi trường sẽ được tải trong tệp nuxt.config.ts bằng cách sử dụng runtimeConfig và hãy cẩn thận các quy ước đặt tên, chúng phải khớp với NUXT_PUBLIC_YOUR_ENV và đối tượng runtimeConfig, nếu không chúng ta có thể gặp phải sự không nhất quán giữa môi trường dev và build.


     export default defineNuxtConfig({
       modules: ['vue-clerk/nuxt'],
       clerk: {
         appearance: {},
       }
       runtimeConfig: {
         public: {
          clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
         },
       }
     });


Bây giờ, bước tiếp theo là sử dụng Clerk Components, ví dụ như trong thành phần Tiêu đề và sử dụng nó.

     <script lang="ts" setup>
     // You don't have to import anything from  Clerk
     </script>

     <template>
       <div>
         <SignIn />
       </div>
     </template>

Chúng ta cũng phải bảo vệ các tuyến đường cần xác thực và nếu người dùng không được ủy quyền, họ sẽ bị chuyển hướng đến trang chủ hoặc bất kỳ nơi nào chúng ta muốn.

     // middleware/auth.ts
     import { defineNuxtRouteMiddleware, navigateTo } from '#app';
     import { useClerk } from '@clerk/clerk-vue';

     export default defineNuxtRouteMiddleware(() => {
       const clerk = useClerk();

       if (!clerk.user.value) {
         return navigateTo('/sign-in');
       }
     });

Bước tiếp theo là thêm các kiểu để đảm bảo Clerk hoạt động với Typescript. Vì chúng tôi đang sử dụng SDK cho Vue.js và Nuxt.js, nên không cần thiết phải cài đặt gói @clerk/types vì SDK bao gồm định nghĩa kiểu riêng của chúng. Bạn có thể đọc tệp trong kho lưu trữ để chắc chắn về các kiểu chính xác là gì.

     import { UserResource } from '@clerk/types';

     // Example function using Clerk's user type
     function getUserName(user: UserResource) {
       Return { 
     user.firstName || 'Guest', 
     user.emailAddresses; 
       }
     }

Điều duy nhất còn lại là bật mô-đun typescript để xây dựng ứng dụng để sau đó được triển khai vào môi trường production.

     
     export default defineNuxtConfig({
       modules: ['vue-clerk/nuxt'],
       clerk: {
         appearance: {},
       }
       runtimeConfig: {
         public: {
           clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
         },
       }
       buildModules: ['@nuxt/typescript-build'], // Enable TypeScript
     });

</code>

<strong>Kết luận</strong>

Xác thực bằng Clerk rất đơn giản và dễ dàng, giờ đây bạn có thể thêm nó vào dự án của mình và có thêm một tùy chọn để người dùng lựa chọn và điều này sẽ tốt hơn cho trải nghiệm người dùng. Cảm ơn các bạn đã theo dõi.

import { useRouter } from 'vue-router';

export default function authGuard() {
    const router = useRouter();
    // Kiểm tra xem có biến accessToken trong localStorage không
    if (sessionStorage.getItem('accessTokenAdmin') === null) {
        // Biến accessToken không tồn tại hoặc bằng null
        // Chuyển về trang đăng nhập
        router.push('/admin/login');
    }
}

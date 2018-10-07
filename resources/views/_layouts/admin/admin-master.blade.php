<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script type="text/javascript">
            // window.Laravel = { csrfToken: '{{ csrf_token() }}'};
        </script>
        <title>Dashboard</title>
        <!-- JK User Custom Final CSS -->
        <link href="{{ asset('css/admin/dashboard.css') }}" rel="stylesheet" type="text/css" media="all" />
    </head>
    <body>
        <!-- Page Content -->
        @yield('page_content')
        <!-- Page Content -->
        <!-- js -->
        <script src="{{ mix('js/app.js') }}" ></script>
    </body>
</html>
